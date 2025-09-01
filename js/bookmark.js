// Global variables
var siteNameInput = document.getElementById("siteName");
var siteURLInput = document.getElementById("siteURL");
var bookmarkList = document.getElementById("bookmarkList");
var bookmarks = [];



// Load bookmarks on page load
document.addEventListener("DOMContentLoaded", function () {
  bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  displayBookmarks();
});

// add bookmark
function saveBookmark() {
  var siteName = siteNameInput.value.trim();
  var siteURL = siteURLInput.value.trim();

  if (!siteName || !siteURL) {
    alert("Please enter both name and URL.");
    return;
  }

  // ✅ URL validation with regex
  var pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
  if (!pattern.test(siteURL)) {
    alert("Please enter a valid URL (e.g. https://example.com)");
    return;
  }


  bookmarks.push({ name: siteName, url: siteURL });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  siteNameInput.value = "";
  siteURLInput.value = "";
  displayBookmarks();
}


// Display bookmarks
function displayBookmarks() {
  bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  var table = "";

  for (var i = 0; i < bookmarks.length; i++) {
    var bookmark = bookmarks[i];
    table +=
      "<tr>" +
      "<td>" + (i + 1) + "</td>" +
      "<td>" + bookmark.name + "</td>" +
      "<td><a href='" + bookmark.url + "' target='_blank' class='btn btn-success btn-sm'><i class='fas fa-eye'></i> Visit</a></td>" +
      "<td><button onclick='deleteBookmark(" + i + ")' class='btn btn-danger btn-sm'><i class='fas fa-trash'></i> Delete</button></td>" +
      "</tr>";
  }

  bookmarkList.innerHTML = table;
}

// Delete bookmark
function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  displayBookmarks();
}



