import { Rating, TableCell, TableRow, Typography } from "@mui/material";
import React, { useEffect } from "react";

interface ICompanyTableProps {
  name: string;
  type?: string;
  funded?: string;
  approaches?: string | undefined;
  approach?: string;
  location?: string;
  projects?: string;
  country?: string;
  yearsActive?: string;
  organization?: string;
}

const CompanyTable: React.FC<ICompanyTableProps> = ({
  name,
  type,
  funded,
  approaches,
  location,
  country,
  projects,
  approach,
  yearsActive,
  organization,
}) => {
  const rating = Math.random() * 5;

  //   useEffect(() => {
  //       location?.split(/^[A-Z0-9 ]*/)
  //   })

  return (
    <TableRow>
      <TableCell>
        <Rating sx={{ zIndex: -1 }} readOnly value={rating} />{" "}
        <Typography>{(rating * 2 * 10).toFixed(2)}%</Typography>
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{type || organization}</TableCell>
      <TableCell>{approaches || approach}</TableCell>
      <TableCell>{funded}</TableCell>
      <TableCell>{projects}</TableCell>
      <TableCell>{location || country}</TableCell>
      <TableCell>{yearsActive}</TableCell>
    </TableRow>
  );
};

export default CompanyTable;
