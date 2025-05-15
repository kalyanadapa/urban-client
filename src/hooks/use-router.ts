import nProgress from 'nprogress';
import { useRouter } from 'next/navigation';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const useAppRouter = () => {
  const router = useRouter();

  const push = (href: string, options?: NavigateOptions | undefined) => {
    nProgress.start();
    router.push(href, options);
  };

  const back = () => {
    nProgress.start();
    router.back();
  };

  const refresh = () => {
    nProgress.start();
    router.refresh();
  };

  const replace = (href: string, options?: NavigateOptions | undefined) => {
    nProgress.start();
    router.replace(href, options);
  };

  return { push, back, refresh, replace };
};
