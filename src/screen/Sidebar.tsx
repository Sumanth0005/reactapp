import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaAngular,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";

const menuItems = {
  Angular: [
    "Components",
    "Services",
    "Directives",
    "Modules",
    "Routing",
    "Forms",
    "HTTP Client",
    "Lifecycle Hooks",
  ],
  React: ["Introduction", "Components", "Hooks"],
  NodeJs: [
    "Introduction",
    "Modules",
    "File System",
    "Creating a Server with HTTP",
    "Express",
    "Express/Routing",
    "Express/Middleware",
    "Express/Request-Response",
    "Database Integration",
    "Database/MongoDB",
    "Database/MySQL",
    "Database/ORM",
    "Event Loop & Asynchronous Programming",
    "Streams and Buffers",
    "Authentication & Security",
    "Deploying Node.js Applications",
    "Testing in Node.js",
  ],
  Html: [
    "Introduction",
    "Elements & Tags",
    "Attributes",
    "Semantic HTML",
    "Forms",
    "Forms/Input",
    "Forms/Validation",
    "Tables",
    "Multimedia",
    "Multimedia/Images",
    "Multimedia/Audio",
    "Multimedia/Video",
    "Links & Navigation",
    "Lists",
    "IFrames",
    "Accessibility",
    "SEO Best Practices",
  ],
  Css: [
    "Introduction",
    "Selectors",
    "Box Model",
    "Flexbox",
    "Grid",
    "Positioning",
    "Responsive Design",
    "Animations & Transitions",
    "Variables",
    "Pseudo-elements & Pseudo-classes",
    "Typography",
    "Shadows",
    "Gradients",
    "Filters",
    "Frameworks",
    "Frameworks/Bootstrap",
    "Frameworks/Tailwind",
  ],
};

export default function Sidebar({ appName }: { appName: string }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const renderContent = () => {
    switch (appName) {
      case "Angular":
        return (
          <div >
            <div className="angularicon">
              <FaAngular color="red" size={30} />
              <h1 className="text-2xl">Angular</h1>
            </div>
            <ul className="angularlist" >
              <ul>
                <li>
                  <Link to="/angular/components">Components</Link>
                </li>
                <li>
                  <Link to="/angular/services">Services</Link>
                </li>
                <li>
                  <Link to="/angular/directives">Directives</Link>
                </li>
                <li>
                  <Link to="/angular/modules">Modules</Link>
                </li>
                <li>
                  <Link to="/angular/routing">Routing</Link>
                </li>
                <li>
                  <Link to="/angular/forms">Forms</Link>
                </li>
                <li>
                  <Link to="/angular/http">HTTP Client</Link>
                </li>
                <li>
                  <Link to="/angular/lifecycle">Lifecycle Hooks</Link>
                </li>
              </ul>
            </ul>
          </div>
        );
      //react menu items
      case "React":
        return (
          <div >
            <div className="reacticon">
              <FaReact color="blue" size={30} />
              <h1 className="text-2xl">React</h1>
            </div>
            <ul className="reactlist">
              <li>
                <Link to="/react/introduction">Introduction to React</Link>
              </li>
              <li>
                <Link to="/react/components">React Components</Link>
              </li>
              <li>
                <Link to="/react/hooks">React Hooks</Link>
              </li>
            </ul>
          </div>
        );

      case "NodeJs":
        return (
          <div>
            <div className="nodeicon">
              <FaNodeJs color="green" size={30} />
              <h1 className="text-2xl">Node.js</h1>
            </div>
            <ul className="nodelist">
              <li>
                <Link to="/nodejs/introduction">Introduction to Node.js</Link>
              </li>
              <li>
                <Link to="/nodejs/modules">Node.js Modules</Link>
              </li>
              <li>
                <Link to="/nodejs/fs">File System (fs Module)</Link>
              </li>
              <li>
                <Link to="/nodejs/http">Creating a Server with HTTP</Link>
              </li>
              <li>
                <Link to="/nodejs/express">Express.js Framework</Link>
                <ul>
                  <li>
                    <Link to="/nodejs/express/routing">Routing in Express</Link>
                  </li>
                  <li>
                    <Link to="/nodejs/express/middleware">
                      Middleware in Express
                    </Link>
                  </li>
                  <li>
                    <Link to="/nodejs/express/request-response">
                      Request & Response Handling
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/nodejs/database">Database Integration</Link>
                <ul>
                  <li>
                    <Link to="/nodejs/database/mongodb">
                      MongoDB with Node.js
                    </Link>
                  </li>
                  <li>
                    <Link to="/nodejs/database/mysql">MySQL with Node.js</Link>
                  </li>
                  <li>
                    <Link to="/nodejs/database/orm">
                      ORMs (Sequelize, Mongoose)
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/nodejs/event-loop">
                  Event Loop & Asynchronous Programming
                </Link>
              </li>
              <li>
                <Link to="/nodejs/streams">Streams and Buffers</Link>
              </li>
              <li>
                <Link to="/nodejs/authentication">
                  Authentication & Security
                </Link>
              </li>
              <li>
                <Link to="/nodejs/deployment">
                  Deploying Node.js Applications
                </Link>
              </li>
              <li>
                <Link to="/nodejs/testing">Testing in Node.js</Link>
              </li>
            </ul>
          </div>
        );
      case "Html":
        return (
          <div>
            <div className="htmlicon">
              {" "}
              <FaHtml5 color="red" size={30} />
              <h1 className="text-2xl">HTML</h1>
            </div>
            <ul className="htmllist">
              <li>
                <Link to="/html/introduction">Introduction to HTML</Link>
              </li>
              <li>
                <Link to="/html/elements">HTML Elements & Tags</Link>
              </li>
              <li>
                <Link to="/html/attributes">HTML Attributes</Link>
              </li>
              <li>
                <Link to="/html/semantic">Semantic HTML</Link>
              </li>
              <li>
                <Link to="/html/forms">HTML Forms</Link>
                <ul>
                  <li>
                    <Link to="/html/forms/input">Input Types</Link>
                  </li>
                  <li>
                    <Link to="/html/forms/validation">Form Validation</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/html/tables">HTML Tables</Link>
              </li>
              <li>
                <Link to="/html/media">Multimedia in HTML</Link>
                <ul>
                  <li>
                    <Link to="/html/media/images">Images</Link>
                  </li>
                  <li>
                    <Link to="/html/media/audio">Audio</Link>
                  </li>
                  <li>
                    <Link to="/html/media/video">Video</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/html/links">Links & Navigation</Link>
              </li>
              <li>
                <Link to="/html/lists">Lists (Ordered & Unordered)</Link>
              </li>
              <li>
                <Link to="/html/iframes">IFrames</Link>
              </li>
              <li>
                <Link to="/html/accessibility">Accessibility in HTML</Link>
              </li>
              <li>
                <Link to="/html/seo">SEO Best Practices</Link>
              </li>
            </ul>
          </div>
        );

      case "Css":
        return (
          <div >
            <div className="cssicon">
              <FaCss3Alt color="orange" size={30} />
              <h1 className="text-2xl">CSS</h1>
            </div>
            <ul className="csslist">
              <li>
                <Link to="/css/introduction">Introduction to CSS</Link>
              </li>
              <li>
                <Link to="/css/selectors">CSS Selectors</Link>
              </li>
              <li>
                <Link to="/css/box-model">Box Model</Link>
              </li>
              <li>
                <Link to="/css/flexbox">Flexbox</Link>
              </li>
              <li>
                <Link to="/css/grid">CSS Grid</Link>
              </li>
              <li>
                <Link to="/css/positioning">Positioning</Link>
              </li>
              <li>
                <Link to="/css/media-queries">Responsive Design</Link>
              </li>
              <li>
                <Link to="/css/animations">CSS Animations & Transitions</Link>
              </li>
              <li>
                <Link to="/css/variables">CSS Variables</Link>
              </li>
              <li>
                <Link to="/css/pseudo-elements">
                  Pseudo-elements & Pseudo-classes
                </Link>
              </li>
              <li>
                <Link to="/css/typography">Typography</Link>
              </li>
              <li>
                <Link to="/css/shadows">Box Shadows & Text Shadows</Link>
              </li>
              <li>
                <Link to="/css/gradients">CSS Gradients</Link>
              </li>
              <li>
                <Link to="/css/filters">CSS Filters</Link>
              </li>
              <li>
                <Link to="/css/frameworks">CSS Frameworks</Link>
                <ul>
                  <li>
                    <Link to="/css/frameworks/bootstrap">Bootstrap</Link>
                  </li>
                  <li>
                    <Link to="/css/frameworks/tailwind">Tailwind CSS</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        );

      default:
        return (
          <div className="side-bar-containair">
            <h2>Select a Technology</h2>
            <ul>
              {Object.entries(menuItems).map(([tech, subItems]) => (
                <li key={tech}>
                  <button
                    onClick={() => toggleMenu(tech)}
                    className="side-bar-containair"
                  >
                    {tech}
                  </button>
                  {openMenu === tech && (
                    <ul className="side-bar-containair">
                      {subItems.map((subItem) => (
                        <li key={subItem}>
                          <Link
                            to={`/${tech.toLowerCase()}/${subItem.toLowerCase()}`}
                            className="side-bar-containair"
                          >
                            - {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
    }
  };

  return (
    <>
      <div className="sidebar">{renderContent()}</div>
    </>
  );
}
