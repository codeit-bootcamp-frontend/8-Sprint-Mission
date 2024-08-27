import React, { useEffect, useState } from "react";
import { User } from "core/dtos/userDTO";
import { DEFAULT_PROFILE_IMAGE } from "core/constants/defaultImages";

function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedOutVisible, setIsLoggedOutVisible] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      fetchUserInfo(token);
    }
  }, []);

  const fetchUserInfo = async (token: string) => {
    try {
      const response = await fetch(
        "https://panda-market-api.vercel.app/users/me",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        const userInfo: User = await response.json();
        setUser(userInfo);
      } else if (response.status === 401) {
        setError("인증 실패");
      } else {
        const errorData = await response.json();
        setError(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("유저 정보 패치 실패:", error);
      setError("유저 정보 패치 실패");
    }
  };

  const handleProfileClick = () => {
    setIsLoggedOutVisible(!isLoggedOutVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    setIsLoggedOutVisible(false);
  };

  return (
    <div className="flex justify-center items-center">
      {error && <p>{error}</p>}
      {user && (
        <div className="relative">
          <img
            src={user.image || DEFAULT_PROFILE_IMAGE}
            alt={`${user.nickname} 프로필 이미지`}
            className="h-8 w-8 cursor-pointer"
            onClick={handleProfileClick}
          />
          {isLoggedOutVisible && (
            <button
              onClick={handleLogout}
              className="absolute w-[102px] top-10 right-0 border border-gray-300 bg-white text-gray-500 rounded py-4"
            >
              로그아웃
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default UserProfile;
