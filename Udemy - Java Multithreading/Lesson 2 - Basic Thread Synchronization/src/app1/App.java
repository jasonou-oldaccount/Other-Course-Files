package app1;

import java.util.Scanner;

class Processor extends Thread {
	
	public boolean running = true;
	
	public void run() {
		
		int numHellos = 0;
		while(running) {
			System.out.println(++numHellos + " Hello");
			
			try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
	}
	
	public void shutdown() {
		running = false;
	}
}

public class App {
	public static void main(String[] args) {
		
		Processor proc1 = new Processor();
		
		proc1.start();
		
		System.out.println("Press return to stop ...");
		Scanner scan = new Scanner(System.in);
		scan.nextLine();
		
		proc1.shutdown();
		
	}
}
