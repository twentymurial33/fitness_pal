import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ReactTyped } from "react-typed";
import { StyledHeader } from "../../app/training/style";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function TitlebarBelowMasonryImageList() {
  return (
    <div style={{ marginTop: "100px" }}>
      <StyledHeader>
        <ReactTyped
          className="typed-text"
          strings={["Train Like an Athlete", "Built for Everyone"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </StyledHeader>

      <div
        style={{
          marginLeft: "400px",
          marginTop: "200px",
        }}
      >
        <Box>
          <ImageList variant="masonry" cols={3} gap={10}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar position="below" title={item.author} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "https://plus.unsplash.com/premium_photo-1664109999537-088e7d964da2",
    title: "Lifting",
    author: "Lifting",
  },

  {
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2670",
    title: "Abs",
    author: "Ab Workouts",
  },
  {
    img: "https://images.unsplash.com/photo-1594882645126-14020914d58d",
    title: "Running",
    author: "Running",
  },
];
