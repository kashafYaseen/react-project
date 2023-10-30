import React, { useState, useEffect } from "react";
import {
  faCaretRight,
  faCircle,
  faPlusCircle,
  faTimes,
  faArrowUp,
  faArrowDown,
  faEdit,
  faCaretDown,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/card.scss";
import Modal from "react-modal";
import { CDBProgress } from "cdbreact";
import searchIcon from "../../assets/search.svg";

const LeftSidebar = (props) => {
  const inputStyle = {
    backgroundImage: `url(${searchIcon})`,
    backgroundSize: "12px 12px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "7px center",
    paddingLeft: "28px",
  };

  const [showPlusIcon, setShowPlusIcon] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [showNestedCard, setShowNestedCard] = useState(false);
  const [showAssignTaskNestedCard, setShowAssignTaskNestedCard] =
    useState(false);

  const { task, showPlus, show } = props;

  useEffect(() => {
    if (showPlus == "false" || show == "") {
      setShowPlusIcon(false);
    } else if (show == "true" || showPlus == "") {
      setShowPlusIcon(true);
      setShowAssignTaskNestedCard(true);
    }
  }, [show, showPlus]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openTaskModal = () => {
    setIsTaskModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsTaskModalOpen(false);
  };

  const toggleDropdown = () => {
    setShowNestedCard(!showNestedCard);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <span className="my-2">
              <div onClick={toggleDropdown}>
                <FontAwesomeIcon
                  icon={showNestedCard ? faCaretDown : faCaretRight}
                  className="caret-icon-color"
                />
              </div>
            </span>
            <span className="mx-2 my-2">
              <FontAwesomeIcon icon={faCircle} className="circle-icon-color" />
            </span>
            <span className="my-2 task-name">{task.name}</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="task-shift">{task.shift}</span>
            {!showPlusIcon && (
              <span>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  className={
                    showNestedCard && !showAssignTaskNestedCard
                      ? "plus-icon-color-dropdown"
                      : "plus-icon-color"
                  }
                />
              </span>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Custom Modal"
          style={{
            content: {
              top: "50%",
              left: "45%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              width: "30%",
              height: "90%",
              background: "white",
            },
            overlay: {
              backgroundColor: "transparent",
            },
          }}
        >
          <div className="modal-header">
            <p className="shift-details">Shift Details</p>
            <button onClick={closeModal} className="close-button">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="modal-body">
            <p className="shift-details">12:00PM - 3:00PM</p>
            <p className="shift-details-tasks">6 Tasks 2 Pickups 4 Drop-offs</p>
            <hr />
            <p className="shift-details-body">Assigned To</p>
            <p className="shift-details-tasks">John Doe - Office Mississauga</p>
            <p className="shift-details-tasks">+1 647 647 6477</p>
            <br />
            <p className="shift-details-body">Task Details</p>
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <span className="my-2">
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="arrow-icon-color"
                    />
                  </span>
                  <span className="mx-4 my-2">
                    <b>1</b>
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="task-details-destination">
                      Destination
                    </span>
                    <span className="destination-time">11:00 AM</span>
                  </div>
                </div>
                <div className="destination-details">Destination Details</div>
                <CDBProgress
                  value={100}
                  colors="success"
                  className="custom-progress-bar"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <span className="my-2">
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="arrow-icon-color"
                    />
                  </span>
                  <span className="mx-4 my-2">
                    <b>2</b>
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="task-details-destination">
                      Destination
                    </span>
                    <span className="destination-time">11:00 AM</span>
                  </div>
                </div>
                <div className="destination-details">Destination Details</div>
                <CDBProgress
                  value={52}
                  colors="primary"
                  className="custom-progress-bar"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <span className="my-2">
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="arrow-icon-color"
                    />
                  </span>
                  <span className="mx-4 my-2">
                    <b>3</b>
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="task-details-destination">
                      Destination
                    </span>
                    <span className="destination-time">11:00 AM</span>
                  </div>
                </div>
                <div className="destination-details">Destination Details</div>
                <CDBProgress className="custom-progress-bar" />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <span className="my-2">
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="arrow-icon-color"
                    />
                  </span>
                  <span className="mx-4 my-2">
                    <b>4</b>
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="task-details-destination">
                      Destination
                    </span>
                    <span className="destination-time">11:00 AM</span>
                  </div>
                </div>
                <div className="destination-details">Destination Details</div>
                <CDBProgress className="custom-progress-bar" />
              </div>
            </div>
            <div className="d-flex">
              <p className="shift-details-body">Shift Notes</p>
              <button onClick={closeModal} className="edit-button">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
            <p className="shift-details-tasks">
              Call on arrival. Call on arrival. Call on arrival.
            </p>
            <p className="shift-details-tasks">Park at 123 Fleetwell Cres.</p>
            <br />
            <p className="shift-details-body">Completion Requirements</p>
            <p className="shift-details-tasks">Photo</p>
            <p className="shift-details-tasks">Signature</p>
            <br />
            <div className="shift-details-row">
              <p className="shift-details-body">Pay</p>
              <p className="shift-details-body">Status</p>
            </div>
            <div className="shift-details-row">
              <input className="input-box" value="$ 50.00" disabled></input>
              <p className="shift-details-tasks-progress">In Progress</p>
            </div>
            <br />
            <button className="done-button">Done</button>
          </div>
        </Modal>
      )}

      {showNestedCard && showAssignTaskNestedCard && (
        <div>
          <div className="card">
            <div className="card-body nested-card-color">
              <div className="d-flex align-items-center">
                <span className="my-2">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="nested-arrow1-icon-color"
                  />
                </span>
                <span className="mx-4 my-2">
                  <b>1</b>
                </span>
                <div className="d-flex align-items-center">
                  <span className="nested-task-details-destination">
                    100 Princes' Blvd
                  </span>
                  <span className="nested-destination-time">11:00 AM</span>
                </div>
              </div>
              <div className="destination-details">
                Singularity Productions Inc
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <div className="card-body nested-card-color">
                <div className="d-flex align-items-center">
                  <span className="my-2">
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="nested-arrow2-icon-color"
                    />
                  </span>
                  <span className="mx-4 my-2">
                    <b>2</b>
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="nested-task-details-destination">
                      100 Princes' Blvd
                    </span>
                    <span className="nested-destination-time">11:00 AM</span>
                  </div>
                </div>
                <div className="destination-details">
                  Singularity Productions Inc
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <div className="card-body nested-card-color">
                <div className="d-flex align-items-center">
                  <span className="my-2">
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="nested-arrow2-icon-color"
                    />
                  </span>
                  <span className="mx-4 my-2">
                    <b>3</b>
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="nested-task-details-destination">
                      100 Princes' Blvd
                    </span>
                    <span className="nested-destination-time">11:00 AM</span>
                  </div>
                </div>
                <div className="destination-details">
                  Singularity Productions Inc
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showNestedCard && !showAssignTaskNestedCard && (
        <div>
          <div className="card">
            <div className="card-body nested-card-color">
              <div className="row">
                <div className="col-md-12">
                  <div className="form">
                    <input
                      type="text"
                      className="form-input-height form-control form-input"
                      style={inputStyle}
                      placeholder="Search task or shift"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="card-body nested-card-color"
              onClick={openTaskModal}
            >
              <div className="d-flex align-items-center">
                <span className="my-2">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="nested-arrow1-icon-color"
                  />
                </span>
                <span className="mx-4 my-2">
                  <b>1</b>
                </span>
                <div className="d-flex align-items-center">
                  <span className="nested-task-details-destination">
                    100 Princes' Blvd
                  </span>
                  <span className="nested-destination-date-time">Jan 17</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="task-assign-destination-details">
                  Singularity Productions Inc
                </span>
                <span className="nested-task-assign-destination-time">
                  11:00 AM
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="card-body nested-card-color"
              onClick={openTaskModal}
            >
              <div className="d-flex align-items-center">
                <span className="my-2">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="nested-arrow2-icon-color"
                  />
                </span>
                <span className="mx-4 my-2">
                  <b>1</b>
                </span>
                <div className="d-flex align-items-center">
                  <span className="nested-task-details-destination">
                    100 Princes' Blvd
                  </span>
                  <span className="nested-destination-date-time">Jan 17</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="task-assign-destination-details">
                  Singularity Productions Inc
                </span>
                <span className="nested-task-assign-destination-time">
                  11:00 AM
                </span>
              </div>
            </div>
          </div>

          <div className="card ">
            <div className="card-body nested-card-color" onClick={openModal}>
              <div className="card-color">
                <span className="assign-task-nested-time-card">
                  11:00 AM - 1:00 PM
                </span>
                <span className="assign-task-nested-cards">5</span>
              </div>
              <div className="card-color">
                <span>
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="user-icon-color"
                  />
                </span>
                <span className="hungerhub-text">Hungerhub East</span>
                <span className="hungerhub-text-count hungerhub-text">3</span>
                <span>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="user-icon-color"
                  />
                </span>
                <span className="custom-pipe">|</span>
                <span className="hungerhub-text">2</span>
                <span>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="arrow-down-icon"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body nested-card-color" onClick={openModal}>
              <div className="card-color">
                <span className="assign-task-nested-time-card">
                  11:00 AM - 1:00 PM
                </span>
                <span className="assign-task-nested-cards">5</span>
              </div>
              <div className="card-color">
                <span>
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="user-icon-color"
                  />
                </span>
                <span className="hungerhub-text">Hungerhub East</span>
                <span className="hungerhub-text-count hungerhub-text">3</span>
                <span>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="user-icon-color"
                  />
                </span>
                <span className="custom-pipe">|</span>
                <span className="hungerhub-text">2</span>
                <span>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="arrow-down-icon"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {isTaskModalOpen && (
        <Modal
          isOpen={isTaskModalOpen}
          onRequestClose={closeModal}
          contentLabel="Custom Modal"
          style={{
            content: {
              top: "50%",
              left: "45%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              width: "30%",
              height: "90%",
              background: "white",
            },
            overlay: {
              backgroundColor: "transparent",
            },
          }}
        >
          <div className="modal-header">
            <p className="shift-details">Task Ef1245fc</p>
            <button onClick={closeModal} className="close-button">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="modal-body">
            <p className="shift-details-tasks">Pickup Task Details</p>
            <p className="shift-details-body">January 21, 2021 at 10:43 AM</p>
            <hr />
            <p className="shift-details-body">Assigned To</p>
            <p className="shift-details-tasks">John Doe - Office Mississauga</p>
            <p className="shift-details-tasks">+1 647 647 6477</p>
            <br />
            <p className="shift-details-body">Recipient</p>
            <p className="shift-details-tasks">GEP Umbrella Inc</p>
            <p className="shift-details-tasks">+1 416 416 4166</p>
            <br />
            <p className="shift-details-tasks">
              Pickup Notes: Leave at door. Call Buzzer 412
            </p>
            <br />
            <p className="shift-details-tasks">
              Delivery Notes: Call on arrival. Call on arrival. Call on arrival.
            </p>
            <p className="delivery-shift-details-task">
              Call on arrival. Call on arrival. Call on arrival.
            </p>
            <br />
            <p className="shift-details-body">Destination</p>
            <p className="shift-details-tasks">777 Kipling Ave</p>
            <p className="shift-details-tasks">Toronto M4P 2H6</p>
            <br />
            <p className="shift-details-body">Task Notes</p>
            <p className="shift-details-tasks">
              Call on arrival. Call on arrival. Call on arrival.
            </p>
            <p className="shift-details-tasks">Park at 132 Fleetwell Cres.</p>
            <br />
            <p className="shift-details-body">Completion Requirements</p>
            <p className="shift-details-tasks">Photo</p>
            <p className="shift-details-tasks">Signature</p>
            <br />
            <p className="shift-details-body">Status</p>
            <p className="shift-details-tasks">Completed</p>
            <br />

            <div className="shift-details-row">
              <button className="cancel-button">Cancel</button>
              <button className="task-done-button">Done</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default LeftSidebar;
