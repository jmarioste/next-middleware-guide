import { stackMiddleware } from "middlewares/stackMiddlewares";
import { withAuthorization } from "middlewares/withAuthorization";
import { withHeaders } from "middlewares/withHeaders";

const factories = [withHeaders, withAuthorization];

export default stackMiddleware(factories);
