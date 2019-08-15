import { gql } from "apollo-boost";

const ADD_LYRIC = gql`
	mutation AddLyricToSong($content: String, $songId: ID) {
		addLyricToSong(content: $content, songId: $songId) {
			id
			lyrics {
				content
			}
		}
	}
`;

export default ADD_LYRIC;