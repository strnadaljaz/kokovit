import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function openNewPage(router: AppRouterInstance, pageName: string) {
    router.push(pageName);
}
