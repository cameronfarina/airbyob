export const fetchSuggestions = suggestions =>
  $.ajax({
    method: "GET",
    url: "api/suggestions",
    suggestions
  });
