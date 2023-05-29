import router from "@/router";
import { DocumentTitle } from "@/types/app.types";

export default {
  init(): void {
    router.beforeEach(async (to, from, next) => {
      const documentTitle: DocumentTitle = document;
      documentTitle.title = (to.meta.title as string) || "News";
      next();
    });
  },
};
