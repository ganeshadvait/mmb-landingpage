import React from "react";
import { CardGroup, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import OrderTable from "./OrderDetailsTable";

const AdminSub = () => {
  return (
    <div>
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Total no.of Orders</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              200
            </CardSubtitle>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Trantiant</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              20
            </CardSubtitle>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h5">pending</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              180
            </CardSubtitle>
          </CardBody>
        </Card>
      </CardGroup>
      <div className="ordertablewrapper">
        <OrderTable />
      </div>
    </div>
  );
};

export default AdminSub;
