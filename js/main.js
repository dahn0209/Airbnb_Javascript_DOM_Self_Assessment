function MainModule(listingsID = "#listings") {
  const me = {};


  const listingsElement = document.querySelector(listingsID);

  // function getListingCode(listing) {
  //   return `<div class="col-4">
  // <div class="listing card">
  //   <img
  //     src="https://a0.muscache.com/pictures/b7c2a199-4c17-4ba6-b81d-751719d2dac6.jpg"
  //     class="card-img-top"
  //     alt="AirBNB Listing"
  //   />
  //   <div class="card-body">
  //     <h2 class="card-title">${listing.name}</h2>
  //     <div>${listing.price}</div>
  //     <p class="card-text">
  //       Some quick example text to build on the card title and make up
  //       the bulk of the card's content.
  //     </p>
  //     <a href="#" class="btn btn-primary">Go somewhere</a>
  //   </div>
  // </div>
  // <!-- /card -->
  // </div>

  // `;
  // }

  function getListingCode(listing) {
  // Parse amenities (they come as a JSON-encoded string)
  let amenities = [];
  try {
    if (listing.amenities) {
      amenities = JSON.parse(listing.amenities);
    }
  } catch (e) {
    amenities = [];
  }

  const topAmenities = amenities.slice(0, 5).join(", ");

  const rating = Number(listing.review_scores_rating);
  const reviews = Number(listing.number_of_reviews);
  const isSuperhost = listing.host_is_superhost === "t";

  return `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <article class="listing card h-100 shadow-sm">
        <img
          src="${listing.picture_url}"
          class="card-img-top"
          alt="${listing.name}"
          onerror="this.onerror=null; this.src='https://placehold.co/600x400?text=No+Image';"
        />

        <div class="card-body d-flex flex-column">
          <header class="d-flex justify-content-between align-items-start mb-2">
            <h2 class="card-title h5 flex-grow-1 me-2">
              ${listing.name}
            </h2>

            <div class="text-end">
              <div class="price fw-bold">
                ${listing.price} <span class="text-muted fs-6">/ night</span>
              </div>
              ${
                !Number.isNaN(rating)
                  ? `<div class="rating text-muted">
                       ★ ${rating.toFixed(2)} (${reviews} reviews)
                     </div>`
                  : ""
              }
            </div>
          </header>

          <p class="card-text small text-muted listing-description mb-2">
            ${listing.description || "No description provided."}
          </p>

          <div class="amenities small mb-2">
            <strong>Amenities:</strong>
            ${topAmenities || "See full listing for details"}
          </div>

          <div class="host d-flex align-items-center mt-auto pt-2 border-top">
            <img
              src="${listing.host_picture_url}"
              alt="${listing.host_name}"
              class="host-photo me-2"
            />
            <div class="small">
              <div class="fw-semibold">
                Host: ${listing.host_name || "Unknown"}
                ${
                  isSuperhost
                    ? '<span class="badge bg-warning text-dark ms-1">Superhost</span>'
                    : ""
                }
              </div>
              ${
                listing.host_neighbourhood
                  ? `<div class="text-muted">${listing.host_neighbourhood}</div>`
                  : ""
              }
            </div>
          </div>
        </div>
      </article>
    </div>
  `;
}


  function redraw(listings) {
    listingsElement.innerHTML = "";
    // for (let i = 0; i < listings.length; i++) {
    //   listingsElement.innerHTML += getListingCode(listings[i]);
    // }

    // for (let listing of listings) {
    //   console.log("listing", listing );
    //   listingsElement.innerHTML += getListingCode(listing);
    // }

    listingsElement.innerHTML = listings.map(getListingCode).join("\n");
  }

  async function loadData() {
    const res = await fetch("./airbnb_sf_listings_500.json");
    const listings = await res.json();


    me.redraw(listings.slice(0, 50));
  }

  me.redraw = redraw;
  me.loadData = loadData;

  return me;
}

const main = MainModule();


main.loadData();