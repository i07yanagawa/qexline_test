import React, {useState} from 'react'
//stateを持った値と、それを更新するための関数を返したい
import {useForm} from 'react-hook-form'
//React-Hook-Formをimport
//import Confirmation from './Confirmation'
//入力内容確認画面を表示させるcomponent
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { navigate } from 'gatsby'

import Layout from "../../components/layout/layout_inner"
import SEO from "../../components/seo"

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({
  company: yup.string().max(320).required().label('会社名'),
  division: yup.string().max(320).required().label('部署名'),
  lastname: yup.string().max(320).required().label('名字'),
  firstname: yup.string().max(320).required().label('名前'),
  email: yup.string().max(320).required().label('メールアドレス'),
  tel: yup.string().matches(phoneRegExp, '電話番号の形式に誤りがあります').label('電話番号'),
  detail: yup.string().max(1000).required().label('お問い合わせ内容'),
})

const Contact = () => {
  const {register, handleSubmit, watch, reset, errors, getValues} = useForm({
    resolver: yupResolver(schema)
  })
  //const { register, handleSubmit } = useForm();
  //useFormを呼び出して使いたいメソッドを書く
  //const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)
  //isConfirmationVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
  //isConfirmationVisibleの初期値はfalseで入力内容確認画面は非表示に
  //const hideConfirmation = () => setIsConfirmationVisible(false)
  //入力内容確認画面の閉じるボタンを押した時非表示にする関数を宣言
  //const onSubmitData = () => setIsConfirmationVisible(true)
  //submitボタンを押した時、入力内容確認画面を表示させる
  
 const onSubmitter = (data) => {
   
   const form = document.getElementById("contact-form");
   //console.log(form.name);
   data['form-name'] = form.name;
   console.log(data);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data)
    })
      .then(() => navigate(form.action))
      .catch(() => console.log("お問い合わせに失敗しました"));
  };
  

  const Company = watch('company')
  const Division = watch('division')
  const Tel = watch('tel')
  const FirstName = watch('firstname')
  const LastName = watch('lastname')
  const Email = watch('email')
  const Detail = watch('detail')
  //watchに各フォーム部品のnameの値を引数で渡すとでタイムリーで入力状態を監視してる

  return(
    <Layout>
    <SEO pagetitle="お問い合わせフォーム" />
    <div class="contact__form">
      <h2>お問い合わせフォーム</h2>
      <form id="contact-form" data-netlify="true" name="contact" action="/contact/thanks" onSubmit={handleSubmit(onSubmitter)}>
      <input type="hidden" name="form-name" value="contact" />
      {/*onSubmit(入力フォームの送信ボタンがクリックされた時に発生するイベント)で入力された値をhandleSubmitで取り出す*/}
      <div class="contact__form__box">
        <label htmlFor='company'>会社名
          <span className={`requiredIcon ${Company ? 'is-ok' : 'is-required'}`}>
          {Company ? 'OK' :'必須'}
          </span>
        </label>
        <div class="contact__form__input">
        <input
          name='company'
          placeholder='会社名を入力'
          ref={register({required: true})} />
        {errors.company && <p className='formError'>会社名を入力してください</p>}{/*validationが通らなければerrorがtrueになる*/}
        </div>
      </div>
      <div class="contact__form__box">
        <label htmlFor='division'>部署名
          <span className={`requiredIcon ${Division ? 'is-ok' : 'is-required'}`}>
          {Division ? 'OK' :'必須'}
          </span>
        </label>
        <div class="contact__form__input">
        <input
          name='division'
          placeholder='部署名を入力'
          ref={register({required: true})} />
        {errors.division && <p className='formError'>部署名を入力してください</p>}{/*validationが通らなければerrorがtrueになる*/}
        </div>
      </div>
      <div class="contact__form__box">
        <div class="box-2">
        <label htmlFor='lastname'>名字
          <span className={`requiredIcon ${LastName ? 'is-ok' : 'is-required'}`}>{/*nameが入力されてたらtrue*/}
            {LastName ? 'OK' :'必須'}
          </span>
        </label>
        <div class="contact__form__input">
        <input
          name='lastname'
          placeholder='名字を入力'
          ref={register({required: true})} />
          {errors.lastname && <p className='formError'>名字を入力して下さい</p>}{/*nameが正しく入力されていない時に表示される*/}
        </div>
        </div><div class="box-2">
        <label htmlFor='firstname'>名前
          <span className={`requiredIcon ${FirstName ? 'is-ok' : 'is-required'}`}>{/*nameが入力されてたらtrue*/}
            {FirstName ? 'OK' :'必須'}
          </span>
        </label>
        <div class="contact__form__input">
        <input
          name='firstname'
          placeholder='名前を入力'
          ref={register({required: true})} />
          {errors.firstname && <p className='formError'>名前を入力して下さい</p>}{/*nameが正しく入力されていない時に表示される*/}
        </div>
        </div>
      </div>
      <div class="contact__form__box">
        <label htmlFor='email'>メールアドレス
          <span className={`requiredIcon ${Email && !errors.email ? 'is-ok': 'is-required'}`}>
            {Email && !errors.email ? 'OK' :'必須' }
          </span>
        </label>
        <div class="contact__form__input">
        <input
          type='email'
          name='email'
          placeholder='メールアドレスを入力'
          ref={register({
          required: true,
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
          })}
        />
        {errors.email && <p className='formError'>メールアドレスを正しく入力して下さい</p>}
        </div>
      </div>
      <div class="contact__form__box">
        <label htmlFor='tel'>電話番号
          <span className={`requiredIcon ${Tel && !errors.tel ? 'is-ok': 'is-required'}`}>
            {Tel && !errors.tel ? 'OK' :'必須' }
          </span>
        </label>
        <div class="contact__form__input">
        <input
          name='tel'
          placeholder='電話番号を入力'
          ref={register({required: true,value: /^[0-9-]{10,14}$/i})} />
          {errors.tel && <p className='formError'>電話番号を正しく入力して下さい</p>}{/*nameが正しく入力されていない時に表示される*/}
          </div>
        </div>
        <div class="contact__form__box">
        <label htmlFor='detail'>お問い合わせ内容
          <span className={`requiredIcon ${Detail && !errors.detail ? 'is-ok': 'is-required'}`}>
            {Detail && !errors.detail ? 'OK' :'必須' }
          </span>
        </label>
        <div class="contact__form__input">
        <textarea
          name='detail'
          placeholder='問い合わせ内容を入力'
          ref={register({
              required: true,
              rows: 10,
              minLength: 1,
              maxLength: 1000
            })}
        />
        {errors.detail && <p className='formError'>お問い合わせ内容を1000文字以内で入力して下さい</p>}
        </div>
      </div>
        <div className='btnBox'>
          <input
            type='button'
            onClick={reset}//入力内容もstateもクリア
            value='クリア'
            className='button'/>
          <input
            type='submit'
            value='送信'
            //onClick={scrollToTarget}//移動先ターゲットにした<Element name='scrollTarget'/>までにゅる移動
            className='button'/>
        </div>
      </form>
      </div>
    </Layout>
  )
}

export default Contact
