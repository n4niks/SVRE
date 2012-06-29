package com.nikhil.SVRE;

import com.phonegap.*;
import android.os.Bundle;

public class SVRE_V10Activity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
