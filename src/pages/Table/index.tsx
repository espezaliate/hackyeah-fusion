// @ts-nocheck
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import DB from "./../../assets/DB/localization.json";
import Row from "./Row";

const CompanyTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead fontWeight={700}>
          <TableRow>
            <TableCell>RATING</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>TYPE/ORGANIZATION</TableCell>
            <TableCell>APPROACHES</TableCell>
            <TableCell>FUNDED</TableCell>
            <TableCell>PROJECTS</TableCell>
            <TableCell>LOCATION</TableCell>
            <TableCell>YEARS ACTIVE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(DB).map(([key, value]) =>
            value.map((item) => (
              <Row
                name={item?.Name}
                type={item?.Type}
                approaches={item?.Approaches || item?.Approach}
                location={item?.Location}
                country={item?.Country}
                funded={item?.Funded}
                projects={item?.Projects}
                yearsActive={item?.["Years Active"]}
              />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompanyTable;
