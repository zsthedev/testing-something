import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeClassStatus, markAttendance } from "../redux/actions/schedule";
import toast from "react-hot-toast";
import { loadUser } from "../redux/actions/user";

const Room = ({ isAuthenticated, user }) => {
  const { roomId } = useParams();
  const schedule = useSelector((state) => state.schedule?.schedule);
  const classes =
    schedule.map((c) =>
      c.classes.filter((c) => c._id.toString() === roomId.toString())
    ) || [];

  const startTime = classes[0][0].startTime;

  console.log(classes);
  const { message, error } = useSelector((state) => state.schedule);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [message, error]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userId = user._id;
  const username = user.name;
  const status = "present";

  const meeting = async (element) => {
    const appID = Number(process.env.REACT_APP_ZEGO_APP_ID);
    const serverSecret = process.env.REACT_APP_ZEGO_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      userId,
      username
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container: document.getElementById("call-container"),

      onLeaveRoom: () => {
        dispatch(loadUser());
        navigate("/classchedule");
      },
      onJoinRoom: () => {
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        dispatch(
          markAttendance(
            roomId,
            userId,
            status,
            formattedTime,
            startTime,

            Date.now()
          )
        );
      },

      sharedLinks: [
        {
          name: "Copy Link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname,
        },
      ],

      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };
  return (
    <>
      <div
        className="myCallContainer"
        id="call-container"
        ref={meeting}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </>
  );
};

export default Room;
