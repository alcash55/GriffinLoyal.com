import { TwitterTimelineEmbed} from 'react-twitter-embed';

const TwitterTimeline = () => {
    return (
        <TwitterTimelineEmbed
        sourceType='profile'
        screenName="griffinloyal"
        options={{width:300, height: 750}}
      />
    );
  };
  
  export default TwitterTimeline;