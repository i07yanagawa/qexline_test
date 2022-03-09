import React from "react"
import { Link } from "gatsby"
//import Img from "gatsby-image"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

export default function Home({data}) {
  return (
    
    <Layout>
    <SEO />
    <main className="container" id="container">
          <div id="kv">
            <div className="kv__image"><img src="/images/kv.svg" alt="" /></div>
            <div className="kv__main">
            <h2><img src="/images/logo.svg" alt="" />
            <br />
              <span>もっと気軽に、簡単に、<br />専門知識不要なオンラインイベントツール</span></h2>
	  			<div class="kv__maru">
	  				<span>無料<br>オンライン<br>相談も！</span>
	  			</div>
            <div className="kv__inner">
              <p className="kv__inner__title_s">LP作成、申し込みフォーム、アンケートなど</p>
	  		<p className="kv__inner__title">必要な機能を¥<big>98,000</big>~でご提供！</p>
              <p className="kv__inner__text">オンラインインイベントに必要な機能を低価格でご提供することで、<br className="pc" />
              中小企業様、個人事業主様のマーケティングや、営業、販売促進活動をサポート！<br />
              QEXLINEを導入していただくだけで集客からフォローまで、<br className="pc" />
              特別な専門知識不要でイベントを運営することができます。
              </p>
	              <section id="contact" className="contact"><Link to='/contact'>
              <div className="contact__area">
                  <p>資料請求、お問い合わせはこちら<span /></p>
              </div></Link>
            </div>
            </div>
          </div>
          <article id="article">
            <section id="about" className="about">
              <p>イベントのオンライン配信方法を調べたけど、よく分からない…</p>
	  			<h3><img src="/images/logo.svg" alt="" />は配信担当者様のお悩みを解決します！</h3>
              <div className="about__card__area">
                <div className="about__card">
                  <p className="about__card__text">1回の開催にかかる<br>コストが高い</p>
                  <p className="about__image"><img src="/images/a.svg" alt="" /></p>
	  			<p>¥98,000から<br>豊富にプランをご用意！</p>
                </div>
                <div className="about__card">
                  <p className="about__card__text">開催までの<br>スケジュール感が不明</p>
                  <p className="about__image"><img src="/images/b.svg" alt="" /></p>
	  			<p>最短スピードで<br>イベント開催可能です。</p>
                </div>
                <div className="about__card">
                  <p className="about__card__text">イベント開催の<br>サポートはあるの？</p>
                  <p className="about__image"><img src="/images/c.svg" alt="" /></p>
	  			<p>配信操作や<br>動画制作のお手伝いも！</p>
                </div>
                <div className="about__card">
                  <p className="about__card__text">ずっと使えるの？</p>
                  <p className="about__image"><img src="/images/d.svg" alt="" /></p>
	  			<p>イベントの複数回開催にも<br>対応しています。</p>
                </div>
                <div className="about__card">
                  <p className="about__card__text">使い方が難しそう…</p>
                  <p className="about__image"><img src="/images/e.svg" alt="" /></p>
	  			<p>専門知識不要！<br>直感的に操作可能です。</p>
                </div>
	                  <div className="about__card">
                  <p className="about__card__text">何から始めればいいのか<br>分からない…</p>
                  <p className="about__image"><img src="/images/e.svg" alt="" /></p>
	  			<p>企画段階からの<br>ご支援も可能です。</p>
                </div>
              </div>
              
              <h3>QEXLINEでご提供できる機能</h3>
              <div class="about__function__area">
	            <div className="function__card">
                  <p className="function__image"><img src="/images/e.svg" alt="" /></p>
	  			<p>リアルタイム配信</p>
                </div>
	  	            <div className="function__card">
                  <p className="function__image"><img src="/images/e.svg" alt="" /></p>
	  			<p>オンデマンド配信</p>
                </div>
	  	            <div className="function__card">
                  <p className="function__image"><img src="/images/e.svg" alt="" /></p>
	  			<p>製品展示</p>
                </div>
	  	            <div className="function__card">
                  <p className="function__image"><img src="/images/e.svg" alt="" /></p>
	  			<p>LP作成</p>
                </div>
	  	            <div className="function__card">
                  <p className="function__image"><img src="/images/e.svg" alt="" /></p>
	  			<p>メール配信</p>
                </div>
	  	            <div className="function__card">
                  <p className="function__image"><img src="/images/e.svg" alt="" /></p>
	  			<p>アンケート機能</p>
                </div>
	  	            <div className="function__card">
                  <p className="function__image"><img src="/images/e.svg" alt="" /></p>
	  			<p>チャット機能</p>
                </div>
	  	            <div className="function__card">
                  <p className="function__image"><img src="/images/e.svg" alt="" /></p>
	  			<p>ログ閲覧</p>
                </div>

	          </div>
              <div class="case__area">
              <p class="about__case">
	  		<h3>活用事例</h3>
	  			<div class="flex_test-box">
	  			 <p className="case__image"><img src="◯◯.jpg" alt="" /></p>
  				<p>オンラインセミナー<br>（ウェビナー）<br>研修</p>
  				<p>製品展示会<br>合同展示会<br>商談会<br>バーチャル展示会</p>
	    		<p>フォーラム<br>カンファレンス<br>学会</p>
	    		<p>会社説明会<br>採用説明会</p>
	  </div>
	                <p class="about__case">
	  	  		<h3>こういった方におすすめです</h3>
	  	  			<div class="flex_test-box">
	  			 <p className="case__image"><img src="◯◯.jpg" alt="" /></p>
  				<p>個人事業主様<br>メリット</p>
	  			 <p className="case__image"><img src="◯◯.jpg" alt="" /></p>
  				<p>中小企業様<br></p>
	  			 <p className="case__image"><img src="◯◯.jpg" alt="" /></p>
  				<p>部署単位での使用<br>メリット</p></div>

              </div>
              
	  
              </div>
              <div class="answer__area">
	  	  	<p className="answer__image"><img src="◯◯.jpg" alt="" /></p>
              <p class="about__answer">お客様に必要な機能を低コストで提供し、
	  				<br className="pc" />お客様自身での運営をサポートします。</p>
              <ul>
                <li>最低限のコストでスピード開催を実現</li>
                <li>ご要望に応じた機能のカスタマイズが可能</li>
                <li>お客様専用のオリジナルプラットフォームの構築</li>
                <li>ミニマムプランからサブスクプランまで豊富なラインナップ</li>
                <li>サポートも充実！(MAとのデータ連携カスタマイズも対応可能)</li>       </ul>
              </div>
              
              
            </section>
            
            <section id="price" className="price">
              <h2>Price<br /><span>価格</span></h2>
              <div className="price__wrapper">
                <div className="price__column">
                  <div className="price__details">
                    <h3 className="price__title">シンプル</h3>
                    <p className="price__desc">まずはシンプルにお試しいただきたい方に</p>
                    <div className="pricing">¥<strong>98,000</strong>〜</div>
                    <ul className="items__wrapper">
                      <li>ランディングページ作成</li>
                      <li>配信ページ作成</li>
                      <li>ライブ配信</li>
                    </ul>
                  </div>
                </div>
                <div className="price__column">
                  <div className="price__details">
                    <h3 className="price__title">スターター</h3>
                    <p className="price__desc">ライブ配信を気軽に開催したい方に</p>
                    <div className="pricing">¥<strong>198,000</strong>〜</div>
                    <ul className="items__wrapper">
                      <li>ランディングページ作成</li>
                      <li>配信ページ作成</li>
                      <li>ライブ配信</li>
                      <li>アンケート作成</li>
                    </ul>
                  </div>
                </div>
                <div className="price__column">
                  <div className="price__details">
                    <h3 className="price__title">ウェビナー</h3>
                    <p className="price__desc">ライブ配信の他にオンデマンド配信もしたい方に</p>
                    <div className="pricing">¥<strong>298,000</strong>〜</div>
                    <ul className="items__wrapper">
                      <li>ランディングページ作成</li>
                      <li>配信ページ作成</li>
                      <li>ライブ配信</li>
                      <li>オンデマンド配信</li>
                      <li>アンケート作成</li>
                    </ul>
                  </div>
                </div>
                <div className="price__column">
                  <div className="price__details">
                    <div className="recommend">Recommend</div>
                    <h3 className="price__title">展示会</h3>
                    <p className="price__desc">製品展示も視野に入れたい方に</p>
                    <div className="pricing">¥<strong>498,000</strong>〜</div>
                    <ul className="items__wrapper">
                      <li>ランディングページ作成</li>
                      <li>配信ページ作成</li>
                      <li>ライブ配信</li>
                      <li>オンデマンド配信</li>
                      <li>製品展示</li>
                      <li>アンケート作成</li>
                    </ul>
                  </div>
                </div>
                <div className="price__column">
                  <div className="price__details">
                    <div className="recommend">Recommend</div>
                    <h3 className="price__title">月額プラン</h3>
                    <p className="price__desc">製品展示も視野に入れたい方に</p>
                    <div className="pricing">¥<strong>59,800</strong>〜/月</div>
                    <ul className="items__wrapper">
                      <li>ランディングページ作成</li>
                      <li>配信ページ作成</li>
                      <li>ライブ配信</li>
                      <li>オンデマンド配信</li>
                      <li>製品展示</li>
                      <li>アンケート作成</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="compare" className="price__compare">
                <input id="compare__check" className="compare__check" type="checkbox" />
                <label className="compare__check__label" htmlFor="compare__check">プラン比較</label>
                <table cellPadding={0} cellspacint={0} boder={0} className="compare__table">
                  <thead>
                    <tr>
                      <th>&nbsp;</th>
                      <th>シンプルプラン</th>
                      <th>スタータープラン</th>
                      <th>ウェビナープラン</th>
                      <th>展示会プラン</th>
                      <th>月額プラン</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>ライブ配信</th>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                    </tr>
                    <tr>
                      <th>オンデマンド配信</th>
                      <td>-</td>
                      <td>-</td>
                      <td>○</td>
                      <td>○</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>製品展示ページ</th>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>○</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>アンケート作成</th>
                      <td>-</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                    </tr>
                    <tr>
                      <th>問い合わせフォームリンク作成</th>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                    </tr>
                    <tr>
                      <th>LP作成</th>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                    </tr>
                    <tr>
                      <th>配信ページ作成</th>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                    </tr>
                    <tr>
                      <th>配信ページのメール送信</th>
                      <td>-</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                    </tr>
                    <tr>
                      <th>ログ閲覧機能</th>
                      <td>-</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                    </tr>
                    <tr>
                      <th>ログダウンロード機能</th>
                      <td>-</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                      <td>○</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tips">＊各種カスタマイズや動画配信のサポートも可能です。詳しいお話を聞きたい方は、下記よりお問い合わせください。</div>   
            </section>
	
			<section>
				  <div class="qa-list mts">
					  <dl class="qa">
						  <dt>申し込みから開催までに要する期間はどれくらいですか？</dt>
						<dd>
						  <p>ここに回答が入ります</p>
						</dd>
					</dl>
					<dl class="qa">
						<dt>どのような動画配信ツールと連携していますか？</dt>
						<dd>
						<p>ここに回答が入ります</p>
						</dd>
					</dl>
					<dl class="qa">
						<dt>運営サポートはありますか？</dt>
						<dd>
						<p>ここに回答が入ります</p>
						</dd>
					</dl>
					<dl class="qa">
						<dt>少人数、大人数でのイベントは可能ですか？</dt>
						<dd>
						<p>ここに回答が入ります</p>
						</dd>
					</dl>				
				</div>
			</section>
	
            <section id="contact" className="contact"><Link to='/contact'>
              <h2>CONTACT<br /><span>お問い合わせ</span></h2>
              <div className="contact__area">
                  <div className="contact__text">本製品に関するご質問などはお気軽に下記フォームよりお問い合わせください。</div>
                  <p>資料請求、お問い合わせフォームはこちら<span /></p>
              </div></Link>
            </section>
          </article>
        </main>
        </Layout>
  )
}

