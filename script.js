document
  .getElementById("featuredForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const featuredTitle = document.getElementById("featuredTitle").value;
    const featuredContent = document.getElementById("featuredContent").value;
    const featuredDate = document.getElementById("featuredDate").value;

    const worldTitle = document.getElementById("worldTitle").value;
    const worldContent = document.getElementById("worldContent").value;
    const worldDate = document.getElementById("worldDate").value;
    const worldThumbnail = document.getElementById("worldThumbnail").files[0];

    const designTitle = document.getElementById("designTitle").value;
    const designContent = document.getElementById("designContent").value;
    const designDate = document.getElementById("designDate").value;
    const designThumbnail = document.getElementById("designThumbnail").files[0];

    // Validate the form data
    if (
      !featuredTitle ||
      !featuredContent ||
      !featuredDate ||
      !worldTitle ||
      !worldContent ||
      !worldDate ||
      !worldThumbnail ||
      !designTitle ||
      !designContent ||
      !designDate ||
      !designThumbnail
    ) {
      alert("Please fill in all the fields and upload all thumbnails.");
      return;
    }

    // Read the thumbnails as data URLs
    const reader1 = new FileReader();
    const reader2 = new FileReader();

    reader1.onload = function (event) {
      const worldThumbnailDataUrl = event.target.result;

      reader2.onload = function (event) {
        const designThumbnailDataUrl = event.target.result;

        // Store data in local storage
        const formData = {
          featuredPost: {
            title: featuredTitle,
            content: featuredContent,
            date: featuredDate,
          },
          worldCard: {
            title: worldTitle,
            content: worldContent,
            date: worldDate,
            thumbnail: worldThumbnailDataUrl,
          },
          designCard: {
            title: designTitle,
            content: designContent,
            date: designDate,
            thumbnail: designThumbnailDataUrl,
          },
        };
        localStorage.setItem("blogPostData", JSON.stringify(formData));

        // Redirect to index.html
        window.location.href = "index.html";
      };
      reader2.readAsDataURL(designThumbnail);
    };
    reader1.readAsDataURL(worldThumbnail);
  });
