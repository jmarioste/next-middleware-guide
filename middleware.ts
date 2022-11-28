import { stackMiddleware } from "middlewares/stackMiddlewares";
import { withAuthorization } from "middlewares/withAuthorization";
import { withHeaders } from "middlewares/withHeaders";

const middlewares = [withHeaders, withAuthorization];

export default stackMiddleware(middlewares);
