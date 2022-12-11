import React from "react";
import { ServiceConsumer } from "../";

const WithService = (WrappedComponent) => (props) => {
  return (
    <ServiceConsumer>
      {(service) => {
        return (
          <WrappedComponent {...props} storeService={service} />
        )
      }}
    </ServiceConsumer>
  );
};

export default WithService;
