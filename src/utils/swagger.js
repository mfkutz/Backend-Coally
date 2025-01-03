import { __dirname } from "../path.js";

const swaggerOptions = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Coally Task Management API - Technical Test",
      description: "Documentation of API",
      version: "1.0.0",
    },
  },
  apis: [`${__dirname}/docs/*.yaml`],
};

export const swaggerUiOptions = {
  customCss: `
    .topbar-wrapper .link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 0;
    }
    .topbar-wrapper .link::before {
      content: 'API Specification DOC '; 
      font-size: 30px;
      font-weight: bold;
      color: #fff; 
    }
    .topbar-wrapper .link svg {
      display: none;
    }
  `,
};

export default swaggerOptions;
