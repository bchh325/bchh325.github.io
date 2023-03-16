import { SiExpress, SiAmazondynamodb, SiAwslambda, SiAmazonapigateway, SiMongodb } from 'react-icons/si'
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejsSmall } from "react-icons/di";
import { FaUserLock } from 'react-icons/fa'

const projectInfo = {
    one: {
        name: "Graphify (Mar. 2023)",
        desc: "A data visualization web application I created to view a genre distribution given a user's own playlists",
        skills: [
            {
                iconName: DiReact,
                text: "React.js"
            },
            {
                iconName: DiNodejsSmall,
                text: "Node.js"
            },
            {
                iconName: SiExpress,
                text: "Express.js"
            },
            {
                iconName: SiMongodb,
                text: "MongoDB"
            },
            {
                iconName: FaUserLock,
                text: "OAuth (PKCE)"
            }
        ],
        images: {
            url1: "https://camo.githubusercontent.com/bc13101fc25b01f6c8b18dc16b3b240c58e07af83825185e5c22f891b5e2f9e3/68747470733a2f2f692e696d6775722e636f6d2f47366a485671702e706e67",
            url2: "https://camo.githubusercontent.com/c6038b64f8717ec3cabbea4bd575bca6aff0132989a12b21c04a972fef4fd0b8/68747470733a2f2f692e696d6775722e636f6d2f4e736d685935792e706e67",
            url3: "https://i.imgur.com/5UFIqRr.png"
        },
        content: [
            "Backend for Frontend Proxy created using Node.js and Express.js to interact with Spotify's Web API, adding security by preventing exposure of tokens on the client",
            "Integrated all aspects of OAuth 2.0 Authorization Code Flow w/ PKCE (incl. generation/encryption of verifiers, generation/comparison of state parameters to protect against CSRF on redirect URIs)",
            "Managed storage of tokens and session data, where session IDs are stored via an httpOnly cookie on the client and their corresponding access/refresh tokens in MongoDB",
            "Created separate endpoints to request from both Spotify's authorization servers and web API",
            "Data parsing to create batches of params for API calls given a previous request to handle API limitations (ex. 50 song IDs / request, needs multiple requests to get full set of data)",
            "Data parsing to extract relevant user playlist genre data and structure it in a usable \"key:value\" object to provide a visualization to the user",
            "API response caching to both decrease server load and decrease load times on the client",
            "State management using Redux",
        ]
    },
    two: {
        name: "Stock Watchlist (Dec. 2022)",
        desc: "My first dip into a full stack application, in which users register/login and can create their own watchlist for stock data",
        skills: [
            {
                iconName: DiReact,
                text: "React.js"
            },
            {
                iconName: DiNodejsSmall,
                text: "Node.js"
            },
            {
                iconName: SiAwslambda,
                text: "Lambda"
            },
            {
                iconName: SiAmazondynamodb,
                text: "DynamoDB"
            },
            {
                iconName: SiAmazonapigateway,
                text: "API Gateway"
            },
        ],
        images: {
            url1: "https://i.imgur.com/Vwy3d9e.png",
            url2: "https://i.imgur.com/XNxAUIH.png",
            url3: "https://i.imgur.com/KZZeDWL.png",
        },
        content: [
            "Using IAM to manage authorization across several AWS services",
            "Created HTTP API and corresponding routes using API Gateway",
            "Authorized API calls from client using JWT",
            "Created Lambda functions using Node.js which were integrated on different endpoints on API Gateway to perform a certain task",
            "Performed operations on DynamoDB using Lambda functions to store a unique user's ticker symbols",
            "Created and managed users through AWS Cognito, which involves registration, login, and unauthenticated identities (guest users)",
        ]
    }
}

export default projectInfo;