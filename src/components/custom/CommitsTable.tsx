import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

export function CommitsTable() {
  return (
    <Table className="rounded-2xl bg-clip-padding">
      <TableHeader>
        <TableRow>
          <TableCell>cell content</TableCell>
          <TableCell>cell content</TableCell>
          <TableCell>cell content</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="bg-chart-1">
          <TableCell>cell content</TableCell>
          <TableCell>cell content</TableCell>
          <TableCell>cell content</TableCell>
        </TableRow>
        <TableRow className="bg-chart-1">
          <TableCell>cell content</TableCell>
          <TableCell>cell content</TableCell>
          <TableCell>cell content</TableCell>
        </TableRow>
        <TableRow className="bg-chart-1">
          <TableCell>cell content</TableCell>
          <TableCell>cell content</TableCell>
          <TableCell>cell content</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
