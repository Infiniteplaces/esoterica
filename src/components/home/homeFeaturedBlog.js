import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import LibraryFourPost from "../../components/resources/libraryFourPost"
import LibraryThumbnails from "../../components/resources/libraryThumbnails"

const HomeFeaturedBlog = ({ featured }) => {
  return (
    <div id="homeFeaturedBlog">
      <LibraryFourPost posts={featured} featured />
      <LibraryThumbnails recent />
      <Link className="button secondary" to="/resources/library">
        <span>Go to Our Library</span>
      </Link>
    </div>
  )
}

export default connect(state => ({}), null)(HomeFeaturedBlog)
