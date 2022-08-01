import React from "react";
import { FormRow } from "../../components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Edit job" : "add job"}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */}

          {/* job type */}
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => console.log("clear values")}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
