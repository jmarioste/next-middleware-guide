import { stackMiddleware } from "middlewares/getMiddlewares";
import { withAuthorization } from "middlewares/withAuthorization";
import { withHeaders } from "middlewares/withHeaders";

const factories = [withHeaders, withAuthorization];

export default stackMiddleware(factories);
