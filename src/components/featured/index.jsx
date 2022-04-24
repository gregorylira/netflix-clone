import "./styles.scss";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://scontent.fjpa11-1.fna.fbcdn.net/v/t1.6435-9/119462269_2818109058290214_5155477187505806219_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGTirAhhamCoV5hkv46VG9qxqbfONnuDFPGpt842e4MU1Xp-pJ7bulPWdPi493vXAxd3_sPEj2mHIekygimd29z&_nc_ohc=tufLsXZRvT8AX-khQvT&_nc_ht=scontent.fjpa11-1.fna&oh=00_AT_wkGCDgRh0xNsyDA3Suw98SEH_pQh5AOhLEctkREz2HA&oe=628A6087"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          repellendus eaque incidunt quibusdam dolorum aperiam adipisci corrupti
          ut at, et nesciunt doloribus natus ipsam repudiandae? Sint ipsam
          incidunt esse dignissimos.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
