import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning fun" },
  { id: "q2", author: "Maxi", text: "Learning fun!!!!" },
  { id: "q3", author: "Mark", text: "Learning fun?????" },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
