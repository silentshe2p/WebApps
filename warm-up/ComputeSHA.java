import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

class ComputeSHA {
    public static void main(String args[]) {
        if (args.length != 1)
            usage();

        try {
            Path path = Paths.get(args[0]);
            byte[] fileInBytes = Files.readAllBytes(path);
            MessageDigest md = MessageDigest.getInstance("SHA-1");
            md.update(fileInBytes);
            byte[] fileDigest = md.digest();
            StringBuffer buffer = new StringBuffer();
            // Reference: https://stackoverflow.com/questions/2817752/java-code-to-convert-byte-to-hexadecimal
            for (int i = 0; i < fileDigest.length; i++) {
                // Higher order bits to hex
                buffer.append(Character.forDigit((fileDigest[i] >> 4) & 0xF, 16));
                // Lower order bits to hex
                buffer.append(Character.forDigit((fileDigest[i] & 0xF), 16));
            }
            System.out.println(buffer.toString());
        }
        catch (IOException | NoSuchAlgorithmException e) {
            // e.printStackTrace();
            System.out.println("**Error: " + e);
        }
    }

    private static void usage() {
        System.err.println("Usage: ComputeSHA filename");
        System.exit(1);
    }
}