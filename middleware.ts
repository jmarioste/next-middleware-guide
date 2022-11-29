import { stackMiddlewares } from "middlewares/stackMiddlewares";
import { withHeaders } from "middlewares/withHeaders";
import { withLogging } from "middlewares/withLogging";

export default stackMiddlewares([withLogging, withHeaders]);
