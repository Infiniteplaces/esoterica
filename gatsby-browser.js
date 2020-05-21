/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "firebase/auth"
import "firebase/storage"
import "firebase/firestore"

export { default as wrapRootElement } from "./src/state/ReduxWrapper"
