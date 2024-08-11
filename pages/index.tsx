import CommentCard from "@/components/CommentCard";
import HomePage from "@/pages/HomePage";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

interface Comment {
  updateAt: string;
  createdAt: string;
  likeCount: number;
  image: string;
  content: string;
  title: string;
  nickname: string;
  id: number;
}

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
