import axios from 'axios';
import styles from './Inquliry.module.css';
import { useState } from 'react';
const Inquliry = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [checking, setChecking] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (!name) {
      return alert('성함을 입력해주세요');
    }
    if (!phoneNumber) {
      return alert('연락처를 입력해주세요');
    }
    if (!email) {
      return alert('이메일을 입력해주세요');
    }
    if (!checking) {
      return alert('개인정보 처리방침에 동의해주세요');
    }

    axios
      .post('/email/send', {
        name,
        phoneNumber,
        email,
        company,
        message,
      })
      .then((res) => {
        alert('문의완료');
        setName('');
        setPhoneNumber('');
        setEmail('');
        setCompany('');
        setMessage('');
        setChecking(false);
      })
      .catch((err) => {
        if (err.response.status === 429) {
          return alert('잠시후에 시도해주세요');
        }

        return alert('서버에 문제가 발생하였습니다');
      });
  };

  const handleOnClickDownload = () => {
  console.log(process.env.REACT_APP_API_URL);
  axios.get(`${process.env.REACT_APP_API_URL}/file/download`, {
    responseType: 'blob'
  })
  .then((res) => {
    const fileName = "캐시카플러스 서비스소개서(웹용).pdf";
    const blob = new Blob([res.data], { type: 'application/pdf' }); // MIME 타입 설정
    const href = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  })
  .catch((error) => {
    console.error('파일 다운로드 중 오류 발생:', error);
  });
};

  return (
    <div className={styles.mainWrap} id="5">
      <div className={styles.contentWrap}>
        <div className={styles.leftSection}>
          <div className={styles.commentWrap}>
            <div className={styles.logoCommentBox}>
              <div className={styles.logoBox}>
                <img src="/images/logo.svg" alt="logo" />
              </div>
              <div className={styles.logoCommentTextBox}>
                <div>과 함께</div>
              </div>
            </div>
            <div className={styles.subCommentBox}>
              <div>더 나은 미래를 준비해 보세요!</div>
            </div>
            <div className={styles.downloadCommentBox}>
              <div className={styles.downloadWrap} onClick={handleOnClickDownload}>
                <div className={styles.downloadContentWrap}>
                  <div className={styles.downloadText}>
                    <div>캐시카플러스 소개서 다운로드</div>
                  </div>
                  <div className={styles.downloadIcon}>
                    <img src="/images/downloadIcon.png" alt="download" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.rigthSectionContentWrap}>
            <div className={styles.maTextWrap}>
              <div className={styles.maMainTextWrap}>
                <div className={styles.maMainTextContent}>
                  <div>마케팅 견적이 궁금하다면?</div>
                </div>
              </div>
              <div className={styles.maSubTextWrap}>
                <div className={styles.maSubtextContent}>
                  <div>
                    <span>*</span>표시는 필수입력 항목입니다
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={sendEmail}>
              <div className={styles.inputWrap}>
                <div className={styles.inputContainer}>
                  <div className={styles.inputLeftSectionWrap}>
                    <div className={styles.inputNameContentWrap}>
                      <div className={styles.lableBox}>
                        <div>
                          성함<span>*</span>
                        </div>
                      </div>
                      <div className={styles.inputBox}>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className={styles.inputTelContentWrap}>
                      <div className={styles.lableBox}>
                        <div>
                          연락처<span>*</span>
                        </div>
                      </div>
                      <div className={styles.inputBox}>
                        <input
                          type="text"
                          value={phoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputRigthSectionWrap}>
                    <div className={styles.inputEmailContentWrap}>
                      <div className={styles.lableBox}>
                        <div>
                          이메일<span>*</span>
                        </div>
                      </div>
                      <div className={styles.inputBox}>
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className={styles.inputCompanyContentWrap}>
                      <div className={styles.lableBox}>
                        <div>회사명/직급</div>
                      </div>
                      <div className={styles.inputBox}>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => {
                            setCompany(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.textareaWrap}>
                <div className={styles.textareaLableBox}>
                  <div>문의내용</div>
                </div>
                <div className={styles.textareaBox}>
                  <textarea
                    name="Inquiry"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={styles.checkboxWrap}>
                <div className={styles.checboxContainer}>
                  <div className={styles.checkboxInputBox}>
                    <label>
                      <input
                        type="checkbox"
                        defaultChecked={checking}
                        onClick={() => {
                          setChecking(!checking);
                        }}
                      />
                      <span className={styles.checkboxIcon}></span>
                      <span className={styles.checkboxText}>
                        개인정보 처리방침에 동의합니다.
                      </span>
                    </label>
                  </div>
                  <div className={styles.checkboxSubTextBox}>
                    <div>자세히 보기</div>
                  </div>
                </div>
              </div>
              <div className={styles.submitWrap}>
                <div className={styles.submitContentWrap}>
                  <input
                    type="submit"
                    value="파일첨부"
                    className={styles.submitContent}
                  />
                  <input
                    type="submit"
                    value="문의하기"
                    className={styles.submitContent}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquliry;
