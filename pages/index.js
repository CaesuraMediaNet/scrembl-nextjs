import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import { Acme } from '@next/font/google'

const font = Acme ({
	subsets: ['latin'],
	weight: ['400'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Scrembl</title>
		<meta charSet="utf-8" />
		<meta name="format-detection"      content="telephone=yes" />
		<meta name="format-detection"      content="date=yes" />
		<meta name="format-detection"      content="address=yes" />
		<meta name="format-detection"      content="email=no" />
		<meta name="theme-color"           content="#fdfdfd" />
		<meta name="description"           content="Scrembl, obfusticating text." />
		<meta name="keywords"              content="Scrembl, Obfustication" />
		<meta name="author"                content="Caesura Media Limited" />
		<meta name="viewport"              content="width=device-width, initial-scale=1, shrink-to-fit=no" />

		<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

		<link rel="apple-touch-icon" sizes="72x72" type="image/png" href="/img/scrembl-logo.png" />
        <link rel="icon"             sizes="72x72" type="image/png" href="/img/scrembl-logo.png" />
        <link rel="shortcut icon"    sizes="72x72" type="image/png" href="/img/scrembl-logo.png" />
      </Head>

      <main className={font.className}>
	  	<div className="container-fluid">
			<div className="row">
				<div className="col-sm-10 col-md-8 col-lg-8 m-auto">
					<div className="header">
						<h1 className="mt-4">Scrembl</h1>
						<i id="help-icon"     className="fas fa-question" data-bs-toggle="modal" data-bs-target="#modal-default"></i>
						<i id="privacy-icon"  className="fas fa-user-secret" data-bs-toggle="modal" data-bs-target="#modal-privacy"></i>
						<i id="reload-icon"   className="fas fa-sync-alt"></i>
					</div>
					<div className="text-right">
						<textarea
							rows="7"
							id="input-text"
							placeholder="Paste message to Scrembl here"
							className="form-control form-control-lg"></textarea>
					</div>
					<button id="scrembl" type="button" className="btn bg-gradient-secondary btn-md">
						Scrembl
					</button>
					<div className="text-center">
						<div className="scr-tooltip">
							<div id="copy-scrembled" className="hidden">
								<span className="scr-tooltiptext" id="copy-scrembled-scr-tooltip">
									Copy to clipboard
								</span>
								<i className="far fa-clipboard"></i>
							</div>
						</div>
						<textarea
							rows="7"
							id="output-text"
							placeholder="Or paste Scrembled message here"
							className="form-control form-control-lg"></textarea>
						</div>
					<button id="unscrembl" type="button" className="btn bg-gradient-secondary btn-md">
						UnScrembl
					</button>
					<div className="text-center">
						<div className="scr-tooltip">
							<div id="copy-unscrembled" className="hidden">
								<span className="scr-tooltiptext" id="copy-unscrembled-scr-tooltip">
									Copy to clipboard
								</span>
								<i className="far fa-clipboard"></i>
							</div>
						</div>
						<textarea
							rows="7"
							id="unscrembled-text"
							placeholder="Unscrembled results show here"
							className="form-control form-control-lg"></textarea>
					</div>
				</div>
			</div>
		</div>
		<div className="modal fade" id="modal-default" tabIndex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
            <div id="modal-size-mod" className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-window-close big_x"></i></span>
                        </button>
                    </div>
                    <div id="modal-body">
						<div className="container-fluid">
							<h6>Welcome to Scrembl!</h6>
							<p>Here you can convert some text into some other text which isn&apos;t easily readable by humans.  You can then paste this Scrembled
							text into the social media, email, text etc of your choice for others to be able to convert it back - using Scrembl.
							</p>
							<p>Start by typing your message into the first big text area, then click on SCREMBL then you&apos;ll see the Scrembled text
							in the middle big text area. Click on UNSCREMBL to see it converting it back.  So to convert a Scrembled message, then
							paste that into the middle big text area and click UNSCREMBL- the bottom bit text area will be the original message. Job&apos;s a good&apos;un!
							</p>
							<p>
								Oh, and each Scrembled message only lasts 24hrs from when it was first Scrembled.
							</p>
							<p>You could even do this more than once - for extra obfustication.
							</p>
							<p>And that is the key here - it is not &apos;encryption&apos;, but obfustication - there&apos;s no secret key, just some computer code
							that runs in your browser to convert letters, numbers, dots and dashes etc into something else.
							</p>
							<h6>
							NO messages are saved to any server or database!
							</h6>
							<p>
								That&apos;s it - there is no warrantee or guarantee of anything here.  If it doesn&apos;t work, then I&apos;m sorry, so don&apos;t use Scrembl
								for anything <i>really</i> important!
							</p>
							<hr />
							<h6>Icons : </h6>
							<p className="header">
								<span>
									<i id="help-icon-desc"     className="fas fa-question    "></i>
									Help!
								</span>
								<span>
									<i id="privacy-icon-desc"  className="fas fa-user-secret "></i>
									Privacy Notice
								</span>
								<span>
									<i id="reload-icon-desc"   className="fas fa-sync-alt    "></i>
									Clear all big text areas.
								</span>
								<span>
									<i className="far fa-clipboard"></i>
									Copy to Clipboard
								</span>
							</p>
						</div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-link ml-auto" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
		<div className="modal fade" id="modal-privacy" tabIndex="-1" role="dialog" aria-labelledby="modal-privacy" aria-hidden="true">
            <div id="modal-size-mod" className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-window-close big_x"></i></span>
                        </button>
                    </div>
                    <div id="modal-body">
						<div className="container-fluid">
							<h6>Welcome to Scrembl!</h6>
							<p> Here is a our
								<a rel="noreferrer" target="_blank" href="/privacy-notice.html"> Privacy Notice </a>
								which opens in a new window or tab!
							</p>
						</div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-link ml-auto" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </>
  )
}
