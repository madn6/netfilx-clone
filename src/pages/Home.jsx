import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endPoints from "../services/movieServices";

export default function Home() {
	return (
		<>
			<Hero />
			<MovieRow title={"upcomming"} url={endPoints.upcomming} />
			<MovieRow title={"trending"} url={endPoints.trending} />
			<MovieRow title={"top rated"} url={endPoints.topRated} />
			<MovieRow title={"comedy"} url={endPoints.comedy} />
			<MovieRow title={"popular"} url={endPoints.popular} />
		</>
	);
}
