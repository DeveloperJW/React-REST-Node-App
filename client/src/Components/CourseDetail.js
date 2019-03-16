import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ReactMarkdown = require('react-markdown');

const description = 'High-end furniture projects are great to dream about. But unless you have a well-equipped shop and some serious woodworking experience to draw on, it can be difficult to turn the dream into a reality.\n' +
    '\n' +
    'Not every piece of furniture needs to be a museum showpiece, though. Often a simple design does the job just as well and the experience gained in completing it goes a long way toward making the next project even better.\n' +
    '\n' +
    'Our pine bookcase, for example, features simple construction and it\'s designed to be built with basic woodworking tools. Yet, the finished project is a worthy and useful addition to any room of the house. While it\'s meant to rest on the floor, you can convert the bookcase to a wall-mounted storage unit by leaving off the baseboard. You can secure the cabinet to the wall by screwing through the cabinet cleats into the wall studs.\n' +
    '\n' +
    'We made the case out of materials available at most building-supply dealers and lumberyards, including 1/2 x 3/4-in. parting strip, 1 x 2, 1 x 4 and 1 x 10 common pine and 1/4-in.-thick lauan plywood. Assembly is quick and easy with glue and nails, and when you\'re done with construction you have the option of a painted or clear finish.\n' +
    '\n' +
    'As for basic tools, you\'ll need a portable circular saw, hammer, block plane, combination square, tape measure, metal rule, two clamps, nail set and putty knife. Other supplies include glue, nails, sandpaper, wood filler and varnish or paint and shellac.\n' +
    '\n' +
    'The specifications that follow will produce a bookcase with overall dimensions of 10 3/4 in. deep x 34 in. wide x 48 in. tall. While the depth of the case is directly tied to the 1 x 10 stock, you can vary the height, width and shelf spacing to suit your needs. Keep in mind, though, that extending the width of the cabinet may require the addition of central shelf supports.';
const materialsNeeded ='*   1/2 x 3/4 inch parting strip\n' +
    '*   1 x 2 common pine\n' +
    '*   1 x 4 common pine\n' +
    '*   1 x 10 common pine\n' +
    '*   1/4 inch thick lauan plywood\n' +
    '*   Finishing Nails\n' +
    '*   Sandpaper\n' +
    '*   Wood Glue\n' +
    '*   Wood Filler\n' +
    '*   Minwax Oil Based Polyurethane';

class CourseDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseId: props.match.params.id,
    };
  }

// takes the _id parameter
  render() {
    return (
        <React.Fragment>
          <div className="actions--bar">
            <div className="bounds">
              <div className="grid-100">
              <span><Link to="/courses/update"><button className="button">Update Course</button></Link>
                <Link to="/courses/delete"><button className="button">Delete Course</button></Link>
              </span>
                <Link to="/">
                  <button className="button button-secondary">Return to List
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bounds course--detail">
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <h3 className="course--title">Build a Basic Bookcase</h3>
                <p>By Joe Smith</p>
              </div>
              <div className="course--description">
               <ReactMarkdown source={description}/>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <h3>14 hours</h3>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <ReactMarkdown source={materialsNeeded}/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>

    );
  }

}

export default CourseDetail;