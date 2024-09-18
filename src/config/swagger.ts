import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        tags: [
            {
                name: 'Products',
                description: 'API operation related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: "API Docs for Products"
        }
    },
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)
const swaggerUiOptions: SwaggerUiOptions = {
    customCss: `
        .topbar-wrapper .link{
            content: url('https://rodriguezcamilo.com/wp-content/uploads/2023/09/logo-white_Mesa-de-trabajo-1-170x70.png');
            height: 80px;
            width: auto;
        }
    `,
    customSiteTitle: 'Documentación REST API Express + TypeScript'
}
export default swaggerSpec
export {
    swaggerUiOptions
}