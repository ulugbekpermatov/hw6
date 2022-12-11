import { createContext } from "react";

const ServiceContext = createContext();
const { Consumer: ServiceConsumer, Provider: ServiceProvider } = ServiceContext;

export { ServiceContext, ServiceConsumer, ServiceProvider };
