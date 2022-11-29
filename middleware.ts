import { stackMiddlewares } from "middlewares/stackMiddlewares";
import { withAuthorization } from "middlewares/withAuthorization";
import { withHeaders } from "middlewares/withHeaders";
import { withLogging } from "middlewares/withLogging";

export default stackMiddlewares([withAuthorization, withLogging, withHeaders]);
