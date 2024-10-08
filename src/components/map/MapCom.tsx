import styles from './MapCom.module.css';
import KakaoMap from './KakaoMap';

const MapCom = () => {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.contnetWrap}>
        <div className={styles.textWrap}>
          <div className={styles.textBox}>
            <div className={styles.leftTextWrap}>
              <div className={styles.textContent}>
                <div className={styles.mainText}>
                  <div>찾아오시는 길</div>
                </div>
              </div>
            </div>
            <div className={styles.rightTextWrap}>
              <div className={styles.subTextBox}>
                <div className={styles.subTextContainer}>
                  <div className={styles.iconBox}>
                    <div className={styles.iconContainer}>
                      <img
                        src="/images/telIcon.png"
                        className={styles.telIconBox}
                        alt="tel"
                      />
                    </div>
                  </div>
                  <div className={styles.subTextContent}>
                    <div className={styles.subText}>
                      <div>1522-3769</div>
                    </div>
                  </div>
                </div>
                <div className={styles.subTextContainer}>
                  <div className={styles.iconBox}>
                    <div className={styles.iconContainer}>
                      <img
                        src="/images/messageIcon.png"
                        className={styles.messageIconBox}
                        alt="tel"
                      />
                    </div>
                  </div>
                  <div className={styles.subTextContent}>
                    <div className={styles.subText}>
                      <div>marketingminjog@gmail.com</div>
                    </div>
                  </div>
                </div>
                <div className={styles.subTextContainer}>
                  <div className={styles.iconBox}>
                    <div className={styles.iconContainer}>
                      <img
                        src="/images/markerIcon.png"
                        className={styles.markerIconBox}
                        alt="tel"
                      />
                    </div>
                  </div>
                  <div className={styles.subTextContent}>
                    <div className={styles.subText}>
                      <div> 대구 동구 동대구로 465, 대구스케일업허브 814호</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mapWrap}>
          <div className={styles.mapBox}>
            <KakaoMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCom;
