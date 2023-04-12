import { useEffect } from "react";
import { useRouter } from "next/router";
import useUserState from "@/hooks/useUserState";
import useToast from "@/hooks/useToast";
import Loading from "@/components/common/Loading";
import { naverLoginRequest } from "@/apis/auth";
import { NaverLoginQuery } from "@/types/auth";
import { setAccessToken } from "@/utils/tokenManager";

const NaverLogin = () => {
  const router = useRouter();
  const { setUser } = useUserState();
  const { toast } = useToast();
  useEffect(() => {
    const query = router.query as NaverLoginQuery;
    if (query.code && query.state) {
      (async () => {
        const code = query.code;
        const state = query.state;
        const res = await naverLoginRequest(code, state);

        if (res.success) {
          const result = res.result;
          const oauthId = result.oauthId;
          const provider = "naver";
          const id = result.id;
          const nickname = result.nickname;
          const profileUrl = result.profileUrl;
          const sex = result.sex;
          const accessToken = result.jwtAccessToken;
          setAccessToken(accessToken);
          setUser((prev) => {
            return { ...prev, oauthId: oauthId, provider: provider };
          });
          if (result.redirectUrl) {
            const redirectUrl = result.redirectUrl;
            router.replace(redirectUrl);
          }
          setUser((prev) => {
            return {
              ...prev,
              id: id,
              nickname: nickname,
              profileUrl: profileUrl,
              sex: sex,
            };
          });
          router.replace("/");
        } else {
          toast.alert(res.error);
        }
      })();
    }
  }, [router]);

  return <Loading />;
};

export default NaverLogin;
