sudo apt-get install cmake libjpeg8-dev

git clone https://github.com/jacksonliam/mjpg-streamer

make

sudo make install

export LD_LIBRARY_PATH=.

./mjpg_streamer -o "output_http.so -w ./www" -i "input_uvc.so"