import React, { useEffect } from "react";
import "./class.scss";
import Schedule from "../../student/components/class schedule/Schedule";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllClasses } from "../../redux/actions/schedule";
import Loader from "../../Loader";

const Class = ({ user }) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.classes.loading);
  const classes = useSelector((state) => state.classes.classess?.classes || []);

  useEffect(() => {
    dispatch(getAllClasses());
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <section className="class">
      <div className="row">
        <h2>Classes</h2>
        <div className="btn-row">
          <Link to={"/admin/classes/create"}>Create New</Link>
        </div>
        <div className="schedule-row">
          {classes && classes.length > 0 ? (
            classes.map((c) => (
              <Schedule
                image=""
                teacher={c.teacher}
                student={c.student}
                designation="Developer"
                course_name={c.title}
                start_time={c.startTime}
                duration={c.duration}
                link={c.roomId}
                role={user.role}
              ></Schedule>
            ))
          ) : (
            <p>No Classes Yet</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Class;
