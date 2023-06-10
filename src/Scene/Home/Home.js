import React, { useEffect } from "react";
import { Box} from "@chakra-ui/react";
import TrendingPost from "./TrendingPost/TrendingPost";
import StatCard from "./StatCard/StatCard";
import Date from "Assets/Date.gif";
import Posting from "Assets/Posting.gif";
import Subscribe from "Assets/Subscribe.gif";
import Visitor from "Assets/Visitor.gif";
import Homebackground from "Assets/Homebackground.jpg";
import EventPanel from "./EventPanel/EventPanel";
import "./Home.css"
export default function Home() {
  return (
    <>
     <Box className="home-background" backgroundImage={Homebackground}></Box>
      <Box className="home-foreground"></Box>
        <Box
          position="absolute"
          left="8.61%"
          right="10.56%"
          top="9.792vw"
          height="36.528vw"
        >
          <TrendingPost></TrendingPost>
          <Box
            position="absolute"
            left="56.79%"
            right="22.16%"
            top="0%"
            bottom="63.12%"
          >
            <StatCard
              background="#FAC14E"
              title="Date"
              subtitle="블로그를 시작한지"
              stat="46 일"
              emoji={Date}
              pointcolor = "#000000"
            ></StatCard>
          </Box>

          <Box
            position="absolute"
            left="78.95%"
            right="0%"
            top="0%"
            bottom="63.12%"
          >
            <StatCard
              background="#1D5147"
              title="Visitors"
              subtitle="총 방문자 수"
              stat="100+"
              emoji={Visitor}
              pointcolor = "#ffffff"
            ></StatCard>
          </Box>

          <Box
            position="absolute"
            left="56.79%"
            right="22.16%"
            top="40.49%"
            bottom="22.62%"
          >
            <StatCard
              background="#AD9FA4"
              title="Subscribe"
              subtitle="구독자 수"
              stat="700+"
              emoji={Subscribe}
              pointcolor = "#000000"
            ></StatCard>
          </Box>

          <Box
            position="absolute"
            left="78.95%"
            right="0%"
            top="40.49%"
            bottom="22.62%"
          >
            <StatCard
              background="#FBFEF5"
              title="Posting"
              subtitle="총 포스팅 수"
              stat="700+"
              emoji={Posting}
              pointcolor = "#000000"
            ></StatCard>
          </Box>

          <EventPanel  eventname = "산업 공모전" leftdays = "D-20"></EventPanel>
     </Box> 
    </>
  );
}
