import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ProjectIcon from "@mui/icons-material/Build";
import Launch from "@mui/icons-material/Launch";

import { Link } from "react-router-dom";
import ReactGA from "react-ga";

//source: https://www.youtube.com/watch?v=x7mwVn2z3Sk&t=334s
// https://github.com/machadop1407/react-personal-portfolio-website

function Experience() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
    ReactGA.pageview(location.pathname + location.search);
    document.title = "Arda's Portfolio - Experiences";
  }, [location.pathname, location.search]); // Include location.pathname and location.search in the dependency array

  return (
    <div className="experiences">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="January 2023 - Present"
          iconStyle={{ background: "#2444b5", color: "#fff" }}
          icon={<ProjectIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Arda's Portfolio
            <Link
              className="project-link"
              to="/arda-resume/projects#desktop-apps&portfolio"
            >
              <Launch />
            </Link>
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Personal Project <br />
          </h4>
          <p>(This Website)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="December 2023"
          iconStyle={{ background: "#2444b5", color: "#fff" }}
          icon={<ProjectIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Money On Track
            <Link
              className="project-link"
              to="/arda-resume/projects#mobile-apps&mot"
            >
              <Launch />
            </Link>
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Personal Project
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May - August 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Walmart</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Victoria, BC, Canada
          </h4>
          <p>
            • Ensured product quality by working closely with colleagues to
            inspect produce shelves. <br /> • Applied organizational skills to
            unload and arrange items from trucks, prioritizing older products.{" "}
            <br /> • Provided excellent customer service using my communication
            skills, addressing inquiries and demands with clear communication.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="June 2023"
          iconStyle={{ background: "#2444b5", color: "#fff" }}
          icon={<ProjectIcon />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">
            Mount Doug Maps - iOS{" "}
            <Link
              className="project-link"
              to="/arda-resume/projects#mobile-apps&mdmi"
            >
              <Launch />
            </Link>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Personal Project
          </h4>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2022 - Present"
          iconStyle={{ background: "#b5701b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Victoria
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Victoria, BC, Canada
          </h4>

          <p>
            The Bachelor of Software Engineering (BSEng), {"  "}2<sup>nd</sup>{" "}
            Year.
            <br />
            Expected Graduation: Jan, 2027
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January - July 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">PCE Turkey</h3>
          <h4 className="vertical-timeline-element-subtitle">
            International Student Agency
          </h4>
          <h4 className="vertical-timeline-element-subtitle">Ankara, Turkey</h4>
          <p>
            • Tutored English to assist students studying abroad in
            English-speaking countries.
            <br />• Delivered engaging presentations in both Turkish and
            English, sharing my experiences in Canada and utilizing effective
            communication techniques. (Eye contact, appropriate pauses, clear
            communication).
            <br /> • Chaperoned eight high school students for a week during
            their stay at the orientation event with my leadership skills to
            make sure they were always safe and understood the given lessons.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="June 2022"
          iconStyle={{ background: "#2444b5", color: "#fff" }}
          icon={<ProjectIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jastagram{" "}
            <Link
              className="project-link"
              to="/arda-resume/projects#desktop-apps&jastagram"
            >
              <Launch />
            </Link>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Group Project</h4>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="May 2022"
          iconStyle={{ background: "#2444b5", color: "#fff" }}
          icon={<ProjectIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mount Doug Maps - Android{" "}
            <Link
              className="project-link"
              to="/arda-resume/projects#mobile-apps&mdma"
            >
              <Launch />
            </Link>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Personal Project
          </h4>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="April - May 2022"
          iconStyle={{ background: "#2444b5", color: "#fff" }}
          icon={<ProjectIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Robber
            <Link
              className="project-link"
              to="/arda-resume/projects#desktop-apps&robber"
            >
              <Launch />
            </Link>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Group Project</h4>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2022"
          iconStyle={{ background: "#b5701b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mount Douglas Secondary School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Victoria, BC, Canada
          </h4>
          <p>Graduated with a 90% average.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
