import React from "react";
import { useHistory } from "react-router";

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return(
        <>
        <h1>Information Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nam posuere erat nec elit sodales molestie. Quisque vel egestas diam, 
            non ultricies erat. Suspendisse nisl arcu, vestibulum sed leo eget, fringilla 
            tincidunt nunc. Etiam nulla sapien, ullamcorper non varius non, laoreet in urna. 
            Integer dictum, nisl et tincidunt iaculis, urna elit imperdiet felis, et finibus urna 
            mauris a massa. Vivamus iaculis cursus tincidunt. Pellentesque habitant morbi tristique 
            senectus et netus et malesuada fames ac turpis egestas. Mauris aliquam euismod suscipit. 
            Praesent semper pellentesque orci vitae luctus. Nullam feugiat ipsum sed accumsan sollicitudin. 
            Aenean nisl odio, cursus vel volutpat eu, vehicula quis enim. Pellentesque habitant morbi tristique 
            senectus et netus et malesuada fames ac turpis egestas. Nam et massa ornare, sodales massa hendrerit, 
            ultricies est. Mauris nibh orci, lobortis ut auctor sed, consectetur eu arcu.</p>
            <button className="btn" onClick={() => history.push('/')}>Go to TodoList</button>
        </>
    )
}