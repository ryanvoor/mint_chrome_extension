// on landing page
var checkTopAdExists = setInterval(
    function() {
        if ( typeof document.getElementsByClassName( 'HypothesisTestingView' )[0] !== 'undefined' ) {
            console.log( 'Top ad exists! Kill it!' );
            document.getElementsByClassName( 'HypothesisTestingView' )[0].style.display = 'none';
            clearInterval( checkTopAdExists );
        }
    },
    100 // check every 100 ms to see if the ad exists on the page yet
);

// on landing page
var widgetRemovalCounter = 0;
var checkWidgetAdExists = setInterval(
    function() {
        if ( typeof document.getElementsByClassName( 'adviceWidget' )[0] !== 'undefined' ) {
            if ( document.getElementsByClassName( 'adviceWidget' )[0].style.display !== 'none' ) {
                console.log( 'Widget ad exists! Kill it!' );
                document.getElementsByClassName( 'adviceWidget' )[0].style.display = 'none';
                if ( widgetRemovalCounter > 10 ) {
                    clearInterval( checkWidgetAdExists );
                } else {
                    widgetRemovalCounter++;
                }
            }
        }
    },
    100 // check every 100 ms to see if the ad exists on the page yet
);

// only on transactions page
var checkTransactionTopAdExists = setInterval(
    function() {
        if ( document.getElementById( 'TopTxnOfferWidgetContainer' ) !== null ) {
            console.log( 'Transaction top ad exists! Kill it!' );
            document.getElementById( 'TopTxnOfferWidgetContainer' ).style.display = 'none';
            clearInterval( checkTransactionTopAdExists );
        }
    },
    100 // check every 100 ms to see if the ad exists on the page yet
);
