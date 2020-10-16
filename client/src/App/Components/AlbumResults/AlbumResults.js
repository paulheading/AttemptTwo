import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import { RemoveResultButton } from "../Buttons/Buttons";
import RelatedResults from "./RelatedResults";
import { limitString } from "../../modules/helpers";
import PropTypes from "prop-types";
import "./AlbumResults.scss";

export default function AlbumResults({
  searchTerm,
  currentUser,
  albums,
  savedFilms,
  setAlbums,
  setBlackLists,
  setIsLoginOpen,
  setSavedFilms,
  setResultSaved,
}) {
  return (
    <div className="album-results container">
      <CardDeck className="album-results">
        {albums
          .slice(0, 6)
          .map(({ id, name, url, images, release_date, related }, index) => {
            return (
              <Card className="album-results" key={index}>
                <RemoveResultButton
                  id={id}
                  currentUser={currentUser}
                  savedFilms={savedFilms}
                  searchTerm={searchTerm}
                  setAlbums={setAlbums}
                  setSavedFilms={setSavedFilms}
                  setBlackLists={setBlackLists}
                  setIsLoginOpen={setIsLoginOpen}
                  setResultSaved={setResultSaved}
                />
                <Card.Header className="album-results">
                  <img
                    className="album-results"
                    alt={limitString(name)}
                    src={images[0].url}
                  />
                </Card.Header>
                <Card.Body>
                  <Card.Title className="album-results">
                    <h2>{limitString(name)}</h2>
                  </Card.Title>
                  <Card.Subtitle className="album-results text-muted">
                    <h2>{release_date}</h2>
                  </Card.Subtitle>
                  <Button
                    size="sm"
                    target="_blank"
                    className="find-album"
                    href={url}
                    block
                  >
                    Find on Spotify
                  </Button>
                  {related ? <RelatedResults related={related} /> : null}
                </Card.Body>
              </Card>
            );
          })}
      </CardDeck>
    </div>
  );
}

AlbumResults.propTypes = {
  searchTerm: PropTypes.string,
  currentUser: PropTypes.object,
  albums: PropTypes.array,
  savedFilms: PropTypes.array,
};
