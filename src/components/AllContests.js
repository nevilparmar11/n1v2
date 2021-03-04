import React from "react";
import "../css/AllContest.css";
import Async from "react-async";
import "font-awesome/css/font-awesome.min.css";
import {
  loadContests,
  dateToHumanReadable,
  secondToHumanReadable,
  getCalendarLink,
} from "../helper/Convertor";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Loader from "react-loader-spinner";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

export default function AllContests() {
  return (
    <Async promiseFn={loadContests}>
      <Async.Loading>
        {/* <center>
          <h1>Loading...</h1>
        </center> */}
        <div >
          <Loader
            type="Puff"
            color="#64ffda"
            className="mid-vertical"
            height={100}
            width={100}
          />
          </div>
      </Async.Loading>
      <Async.Fulfilled>
        {(data) => {
          return (
            <Container>
              <WhiteTextTypography
                color="textPrimary"
                gutterBottom
                variant="h4"
                align="center"
              >
                Upcoming Coding Contests <br />
              </WhiteTextTypography>
              <table
                className="table table-hover table-bordered table-dark"
                border="3"
              >
                <thead>
                  <tr className="mybg-color">
                    <th
                      scope="col col-sm-6"
                      className="font-weight-bold font-code"
                    >
                      <WhiteTextTypography>Contest </WhiteTextTypography>
                    </th>
                    <th
                      scope="col col-sm-2"
                      className="font-weight-bold font-code"
                    >
                      <WhiteTextTypography>Start time </WhiteTextTypography>
                    </th>
                    <th
                      scope="col col-sm-2"
                      className="font-weight-bold font-code"
                    >
                      <WhiteTextTypography>End time </WhiteTextTypography>
                    </th>
                    <th
                      scope="col col-sm-1"
                      className="font-weight-bold font-code"
                    >
                      <WhiteTextTypography>Duration </WhiteTextTypography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((contest) => (
                    <tr key={contest.name}>
                      <td>
                        <Link
                          href={getCalendarLink(contest)}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="large"
                        >
                          <span>
                            <i
                              className="fa fa-calendar-plus-o fa-lg"
                              title="Add to calender"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </Link>
                        &nbsp;&nbsp;&nbsp;
                        <Button
                          className="button-text"
                          variant="contained"
                          color="primary"
                          href={contest.url}
                          target="_blank"
                          size="large"
                        >
                          {" "}
                          {contest.name}{" "}
                        </Button>
                        &nbsp;&nbsp;&nbsp;
                        <small>{contest.site}</small>
                      </td>
                      <td className="font5">
                        <WhiteTextTypography>
                          {dateToHumanReadable(contest.start_time)}
                        </WhiteTextTypography>
                      </td>
                      <td className="font5">
                        <WhiteTextTypography>
                          {dateToHumanReadable(contest.end_time)}
                        </WhiteTextTypography>
                      </td>
                      <td className="font5">
                        <WhiteTextTypography>
                          {secondToHumanReadable(contest.duration)}
                        </WhiteTextTypography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Container>
          );
        }}
      </Async.Fulfilled>
      <Async.Rejected>
        {(error) => `Something went wrong: ${error.message}`}
      </Async.Rejected>
    </Async>
  );
}
